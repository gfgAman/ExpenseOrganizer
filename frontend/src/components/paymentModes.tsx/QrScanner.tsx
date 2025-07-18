import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import Drawer from '../../Layouts/Drawer';
import Modal from '../../modals/QRModal';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

interface QRScannerProps {
  isScannerOpen: boolean;
  setIsScannerOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function QrScanner({ isScannerOpen, setIsScannerOpen }: QRScannerProps) {
  const [scanned, setScanned] = useState<string | null>(null);
  const { wallet } = useSelector((state: RootState) => state.cardSlice);

  const handleScan = (codes: any[]) => {
    const qr = codes.find((c) => c.format === 'qr_code');
    if (qr) {
      setScanned(qr.rawValue);
      setIsScannerOpen(false); // Close modal after scan
    }
  };

  return (
    <div className="bg-white text-black p-3 rounded-lg">
      {/* QR Modal */}
      {
        wallet?.bank_name ? (
          <>
            <Modal isOpen={isScannerOpen} onClose={() => setIsScannerOpen(false)}>
              <h2 className="text-lg font-bold mb-4">Scan Your QR Code</h2>
              <Scanner onScan={handleScan} onError={console.error} scanDelay={300} />
            </Modal>
          </>
        ) : <p>No Bank Selected</p>
      }

      {/* Budget Cards Drawer */}

      <Drawer isOpen={!!scanned} onClose={() => setScanned(null)}>
        {wallet?.budget_cards?.map((card, i) => (
          <div key={i} className="p-4 border rounded mb-3 bg-gray-100">
            <h4 className="font-semibold">{card.title}</h4>
            <p>₹ {card.budget_price.toLocaleString()}</p>
          </div>
        ))}
      </Drawer>
    </div>
  );
}
