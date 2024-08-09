'use client';

import { useRef, useState } from 'react';
export default function MainPage() {
  const [showIframe, setShowIframe] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const no_pengujian = '20240809-2-530';
  const sendMessage = async () => {
    if (iframeRef.current && iframeRef.current.contentWindow) {
      try {
        const id_token =
          'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtleXN0b3JlLUNIQU5HRS1NRSJ9.eyJzdWIiOiJtaW1zLmR1bW15MiIsImlzcyI6Imh0dHBzOi8vaWFtLnBsbi5jby5pZC9zdmMtY29yZS9vYXV0aDIiLCJlbWFpbCI6Im1pbXMuZHVtbXkyQHBsbi5jby5pZCIsIm5hbWUiOiJNaW1zIER1bW15MiIsImdpdmVuX25hbWUiOiJNaW1zIiwicHJlZmVycmVkX3VzZXJuYW1lIjoibWltcy5kdW1teTIiLCJwcm9maWxlIjoiaHR0cHM6Ly9pYW0ucGxuLmNvLmlkL3N2Yy1jb3JlL3Byb2ZpbGUvbWltcy5kdW1teTIiLCJodHRwczovL2lhbS5wbG4uY28uaWQvc3ZjLWNvcmUvYWNjb3VudC9ncm91cHMiOltdLCJodHRwczovL2lhbS5wbG4uY28uaWQvc3ZjLWNvcmUvYWNjb3VudC9yb2xlcyI6WyJtaW1zIHBvbGljeSJdLCJodHRwczovL2lhbS5wbG4uY28uaWQvc3ZjLWNvcmUvYWNjb3VudC9zY29wZXMiOltdLCJub25jZSI6ImpfVWpIZ1hFZUk2RERUVm9JV0hyZ2ExRlJ5Vi1oeUVZeDQwaHdPWEFvdDQiLCJhdF9oYXNoIjoiU3AwZlBiU0o3N0hjbllrTVNzaXNWZyIsInJ0X2hhc2giOiJLeXhEY214MkNnNzc3dFNVanpkclZRIiwic2lkIjoiOTA4ZDdhYjQtMWZkZC00ZjZhLWEwMWItOTc0M2E0ZDY3MzRmIiwiYXVkIjoiZlNjV2xXVVJjMnh3elJCQ3lMamYiLCJleHAiOjE3MjMxOTEwMDUsImlhdCI6MTcyMzE4NzQwNX0.ldLYsykQa4hFxhrrpdBF1MoPEA4j364ZMHjd5o5ep3l7LCLliMab_SM5ScSodVQHGqNxjos5mie8pBw3PdmB_nt50KPaar6ffRwrkssmCeHvMkiGOkE4Fmb67pWZpNgEe93UuJKrG7LMv_NlGUpyAiGilbTtHCnNb_YrWvYCGKpsN-FEs1eNZ6idEQzfcRy0tGLsIChgW8N6k3dVLxgrZzXMXe4cZvKOZLQzwSRWQFlF3E3VF5LaCufBxo29oxqlwrT4NRZY-hx_22o9aE7M5HGC4GkzS6QSuDRx_zdAygJYhmhSQzu9TrMzHd7opgp-GnWUupntoYmJ_k5LOy_mPA';
        const access_token =
          'NjczMDcwMTAtNTYxZS0xMWVmLTljZTUtMmZjYTVlMTE3YjUwsxD9blntoJt3uvnneDCOOdrlmVh2W9m4PYXIG7wngGwZ1UZl6KSoD_sIcDbXTGOeFaw_pAkHWbvJ4m5-PsL_Tw';
        const user_sso = 'mims.dummy2';
        iframeRef.current.contentWindow.postMessage(
          {
            no_pengujian,
            access_token,
            id_token,
            user_sso,
          },
          'http://10.14.152.193:30034'
        );
      } catch (error) {
        console.error(
          'Failed to generate signature key or post message:',
          error
        );
      }
    }
  };

  const handleButtonClick = () => {
    setShowIframe(true);
  };

  const handleIframeLoad = () => {
    console.log('Iframe loaded.');
    sendMessage();
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        className='rounded bg-blue-500 p-2 text-white'
      >
        {no_pengujian}
      </button>
      <div className='flex h-screen w-screen items-center justify-center'>
        {showIframe && (
          <iframe
            ref={iframeRef}
            title='iframe'
            className='rounded-md'
            src='http://10.14.152.193:30034/mims/landing-elab'
            style={{
              width: '90%',
              height: '90%',
              margin: '0 auto',
            }}
            onLoad={handleIframeLoad}
          />
        )}
      </div>
    </>
  );
}
