import { useState } from 'react';
import { Scanner } from '@yudiel/react-qr-scanner';

export default function QrScanner() {
  const [scanned, setScanned] = useState<string|null>(null);

  return (
    <div>
      <h2>React QR Scanner</h2>
      <Scanner
        onScan={(codes) => {
          const qr = codes.find(c => c.format === 'qr_code');
          if (qr) setScanned(qr.rawValue);
        }}
        onError={console.error}
        scanDelay={300}
      />
      <div>
        {scanned ? <p><strong>Result:</strong> {scanned}</p> : <p>Awaiting scan…</p>}
      </div>
    </div>
  );
}
