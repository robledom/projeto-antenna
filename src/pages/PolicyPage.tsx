import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Mapeamento dos nomes das políticas para os seus data-ids do Termly
const policyDataIds = {
  'privacy-policy': '0f53dbe1-d0d0-4849-92a6-053315399115',
  'terms-conditions': '2e957aba-a1b8-49b6-883e-ab5e96bc0bd4',
  'cookie-policy': '8a566d2a-f202-45dc-a224-b1d6eeaf4b06',
};

const PolicyPage = () => {
  const { policyName } = useParams<{ policyName: keyof typeof policyDataIds }>();
  const dataId = policyName ? policyDataIds[policyName] : null;

  useEffect(() => {
    const loadTermlyEmbeds = () => {
      if (window.Termly && typeof window.Termly.loadEmbeds === 'function') {
        window.Termly.loadEmbeds();
      }
    };

    const scriptId = 'termly-jssdk';
    const existingScript = document.getElementById(scriptId);

    if (!existingScript) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = "https://app.termly.io/embed.min.js";
      script.async = true;
      script.onload = loadTermlyEmbeds;
      document.body.appendChild(script);
    } else {
      loadTermlyEmbeds();
    }
  }, [policyName]);

  if (!dataId) {
    return <div>Policy not found.</div>;
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <div name="termly-embed" data-id={dataId} data-type="iframe"></div>
    </div>
  );
};

export default PolicyPage;