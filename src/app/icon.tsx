import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = { width: 64, height: 64 };
export const contentType = 'image/png';

export default function Icon() {
  const logoPath = join(process.cwd(), 'public', 'logo.png');
  const logoData = readFileSync(logoPath);
  const logoBase64 = `data:image/png;base64,${logoData.toString('base64')}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '22%', // Premium squircle shape (Apple-like)
          overflow: 'hidden',
          backgroundColor: '#FFFFFF', // Clean white background
          border: '1px solid #E8E4DF', // Subtle stone border for a polished look
          padding: '8px', // Breathing room around the logo
        }}
      >
        <img
          src={logoBase64}
          style={{ width: '100%', height: '100%', objectFit: 'contain' }}
        />
      </div>
    ),
    { ...size }
  );
}
