import { useState } from 'react';

export default function Home() {
  const [deviceId, setDeviceId] = useState('');
  const [response, setResponse] = useState('');

  const openBox = async () => {
    const res = await fetch('/api/devices', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ device_id: deviceId })
    });
    const data = await res.json();
    setResponse(JSON.stringify(data));
  };

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Paczkomat API Frontend</h1>
      <input
        type="text"
        placeholder="Wpisz device_id"
        value={deviceId}
        onChange={(e) => setDeviceId(e.target.value)}
        style={{ padding: '0.5rem', marginRight: '1rem' }}
      />
      <button onClick={openBox}>Otwórz skrytkę</button>
      {response && <pre style={{ marginTop: '2rem' }}>{response}</pre>}
    </main>
  );
}
