import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';
import Drawer from '../../Layouts/Drawer';
import { useSelector } from 'react-redux';
import type { RootState } from '../../redux/store';

export default function QrScanner() {
  const [scanned, setScanned] = useState<string | null>(null);

  const { wallet } = useSelector((state: RootState) => state.cardSlice)

  console.log(wallet);
  return (
    <div className="relative">
      {scanned === null && (
        <Scanner
          onScan={(codes) => {
            const qr = codes.find((c) => c.format === 'qr_code');
            if (qr) setScanned(qr.rawValue);
          }}
          onError={console.error}
          scanDelay={300}
        />
      )}

      {
        wallet.bank_name ? (

          <Drawer isOpen={!!scanned} onClose={() => setScanned(null)}>
            {wallet?.budget_cards?.map((card, i) => (
              <div key={i} className="p-4 border rounded mb-3 bg-gray-100">
                <h4 className="font-semibold">{card.title}</h4>
                <p>₹ {card.budget_price.toLocaleString()}</p>
              </div>
            ))}
          </Drawer>
        ) : <p>Bank not selected!!</p>
      }
    </div>
  );
}
