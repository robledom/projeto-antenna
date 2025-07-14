import { Link, useNavigate } from "react-router-dom";
import BroadwaveLogo from '../assets/09ff3be9-a35b-4eb9-81ed-32c90613a37b.png';

const Footer = () => {
  const navigate = useNavigate();

  // Função para navegar para a página inicial e rolar para a seção desejada
  const handleNavigateAndScroll = (sectionId?: string) => {
    navigate("/");
    setTimeout(() => {
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 100); // Pequeno delay para garantir que a página inicial renderizou
  };

  return (
    <footer className="bg-gray-200 border-t text-gray-700"> {/* Fundo cinza claro */}
      <div className="container mx-auto px-6 py-12 text-center md:text-left">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Coluna 1: Logo e Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <button onClick={() => handleNavigateAndScroll()} className="hover:opacity-80 transition-opacity duration-200">
              <img src={BroadwaveLogo} alt="Broadwave Antenna Logo" className="h-16" />
            </button>
            <p className="text-sm">© 2025 getbroadwaveantenna.com. All Rights Reserved.</p>
          </div>

          {/* Coluna 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => handleNavigateAndScroll()} className="hover:text-blue-600">Home</button></li>
              <li><button onClick={() => handleNavigateAndScroll("packages")} className="hover:text-blue-600">Packages</button></li>
              <li><button onClick={() => handleNavigateAndScroll("connections")} className="hover:text-blue-600">How It Works</button></li>
            </ul>
          </div>

          {/* Coluna 3: Legal (COM TODOS OS LINKS CORRETOS) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">Legal</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=2e957aba-a1b8-49b6-883e-ab5e96bc0bd4" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Terms & Conditions</a></li>
              <li><a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=0f536be1-d0d0-4849-92a6-053315399115" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Privacy Policy</a></li>
              <li><a href="https://app.termly.io/policy-viewer/policy.html?policyUUID=8a566d2a-f202-45dc-a224-b1d6eeaf4b06" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Cookie Policy</a></li>
              <li><Link to="/contact" className="hover:text-blue-600">Contact Us</Link></li>
            </ul>
          </div>

          {/* Coluna 4: About */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900">About</h3>
            <p className="text-sm leading-relaxed">
              We provide clear, unbiased information to help you choose the best digital antenna and cut the cord for good. Results may vary depending on location.
            </p>
          </div>
        </div>
        
        {/* Disclaimer com design e conteúdo corretos */}
        <div className="mt-12 pt-8 border-t border-gray-300">
           <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-gray-800 space-y-2 max-w-4xl mx-auto">
            <p className="font-bold text-blue-900 text-base">📢 Important Disclosure:</p>
            <p>This site participates in affiliate marketing programs. By clicking on our links and making a purchase, we may receive a commission at no additional cost to you. All transactions, shipping, and support are managed by the manufacturer/seller. The product information presented here is based on content from the official sales page and producer materials.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;