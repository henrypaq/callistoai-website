export default function Integrations() {
  // Integration icons matching the reference image layout
  // Row 1: 3 icons (right-aligned)
  // Row 2: 5 icons (full width)
  // Row 3: 5 icons (full width)
  // Row 4: 5 icons (full width)
  
  const row1 = [
    { name: "Shopify", color: "bg-[#96bf48]", icon: "/icons/shopify-logo-svgrepo-com.svg", iconBg: "bg-white" },
    { name: "Klaviyo", color: "bg-[#FFB3BA]", icon: "/icons/Klaviyo_primary_logo.svg.png", iconBg: "bg-white" },
    { name: "Apple Pay", color: "bg-black", icon: "/icons/apple-pay-svgrepo-com.svg", iconBg: "bg-white" },
  ];
  
  const row2 = [
    { name: "PayPal", color: "bg-[#003087]", icon: "/icons/paypal-svgrepo-com.svg", iconBg: "bg-white" },
    { name: "WooCommerce", color: "bg-[#96588A]", icon: "/icons/woocommerce-icon-svgrepo-com.svg", iconBg: "bg-white" },
    { name: "GitHub", color: "bg-gray-900", icon: "/icons/Octicons-mark-github.svg", iconBg: "bg-white" },
    { name: "Facebook", color: "bg-[#1877F2]", icon: "/icons/Facebook_Logo_2023.png", iconBg: "bg-white" },
    { name: "Dropbox", color: "bg-[#0061FF]", icon: "/icons/dropbox-2-logo-png-transparent.png", iconBg: "bg-white" },
  ];
  
  const row3 = [
    { name: "Slack", color: "bg-[#4A154B]", icon: "/icons/slack-logo-icon.png", iconBg: "bg-white" },
    { name: "Google Drive", color: "bg-[#4285F4]", icon: "/icons/Google_Drive_icon_(2020).svg.png", iconBg: "bg-white" },
    { name: "Gmail", color: "bg-[#EA4335]", icon: "/icons/Gmail_icon_(2020).svg.png", iconBg: "bg-white" },
    { name: "AWS", color: "bg-[#FF9900]", icon: "/icons/Amazon_Web_Services_Logo.svg.png", iconBg: "bg-white" },
    { name: "Google Analytics", color: "bg-[#F4B400]", icon: "/icons/Google-Analytics-Logo.png", iconBg: "bg-white" },
  ];
  
  const row4 = [
    { name: "Mailchimp", color: "bg-[#FFE01B]", icon: "/icons/501-5018400_mailchimp-logo-png-transparent-png.png", iconBg: "bg-white" },
    { name: "Google Ads", color: "bg-[#4285F4]", icon: "/icons/google-ads-icon.webp", iconBg: "bg-white" },
    { name: "Squarespace", color: "bg-[#000000]", icon: "/icons/squarespace-logo-png-transparent.png", iconBg: "bg-white" },
    { name: "Meta", color: "bg-[#1877F2]", icon: "/icons/pngimg.com - meta_PNG12.png", iconBg: "bg-white" },
    { name: "OneDrive", color: "bg-[#0078D4]", icon: "/icons/Microsoft_Office_OneDrive_(2019–present).svg.png", iconBg: "bg-white" },
    { name: "Klarna", color: "bg-[#FFB3BA]", icon: "/icons/klarna-svgrepo-com.svg", iconBg: "bg-white" },
  ];

  return (
    <section aria-labelledby="integrations-heading" className="relative bg-[#0A0F1C] overflow-hidden pt-24">
      {/* Ambient hero-like glow that blends with sections */}
      <div className="pointer-events-none absolute inset-0">
        <div 
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-25 blur-[100px]"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(29,78,216,0.45) 0%, rgba(6,182,212,0.35) 35%, rgba(34,211,238,0.2) 55%, transparent 75%)'
          }}
        />
        {/* Top and bottom fades for seamless blending */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[#0A0F1C] via-[#0A0F1C]/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0A0F1C] via-[#0A0F1C]/60 to-transparent" />
      </div>
      
      {/* Content area */}
      <div className="py-24">
        <div className="relative max-w-7xl mx-auto px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
          {/* Left side - Text content */}
          <div>
                    <h2 id="integrations-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight mb-4">
                      Integrate across your usual set of e-commerce tools & plugins
                    </h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-6">
              From cloud storage to collaboration, Callisto integrates smoothly with the tools you rely on every day.
            </p>
            <a href="/contact" className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-lg">
              Ask About A Platform
            </a>
          </div>

          {/* Right side - Icon grid matching reference */}
          <div className="relative">
            {/* Colored glow behind grid (subtle) */}
            <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/10 via-cyan-500/10 to-transparent blur-2xl" aria-hidden="true" />
            
            {/* Icon grid with perfect alignment - 6 columns */}
            <div className="relative grid grid-cols-6 gap-3 w-[510px]">
              {/* Row 1: 3 icons in columns 4-6 */}
              <div className="col-start-4">
                <div className={`relative w-20 h-20 ${row1[0].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row1[0].name}>
                  {row1[0].icon && (
                    <div className={`w-16 h-16 ${row1[0].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row1[0].icon} alt={row1[0].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-5">
                <div className={`relative w-20 h-20 ${row1[1].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row1[1].name}>
                  {row1[1].icon && (
                    <div className={`w-16 h-16 ${row1[1].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row1[1].icon} alt={row1[1].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-6">
                <div className={`relative w-20 h-20 ${row1[2].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row1[2].name}>
                  {row1[2].icon && (
                    <div className={`w-16 h-16 ${row1[2].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row1[2].icon} alt={row1[2].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Row 2: 5 icons in columns 2-6 */}
              <div className="col-start-2">
                <div className={`relative w-20 h-20 ${row2[0].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row2[0].name}>
                  {row2[0].icon && (
                    <div className={`w-16 h-16 ${row2[0].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row2[0].icon} alt={row2[0].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-3">
                <div className={`relative w-20 h-20 ${row2[1].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row2[1].name}>
                  {row2[1].icon && (
                    <div className={`w-16 h-16 ${row2[1].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row2[1].icon} alt={row2[1].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-4">
                <div className={`relative w-20 h-20 ${row2[2].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row2[2].name}>
                  {row2[2].icon && (
                    <div className={`w-16 h-16 ${row2[2].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row2[2].icon} alt={row2[2].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-5">
                <div className={`relative w-20 h-20 ${row2[3].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row2[3].name}>
                  {row2[3].icon && (
                    <div className={`w-16 h-16 ${row2[3].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row2[3].icon} alt={row2[3].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-6">
                <div className={`relative w-20 h-20 ${row2[4].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row2[4].name}>
                  {row2[4].icon && (
                    <div className={`w-16 h-16 ${row2[4].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row2[4].icon} alt={row2[4].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Row 3: 5 icons in columns 2-6 */}
              <div className="col-start-2">
                <div className={`relative w-20 h-20 ${row3[0].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row3[0].name}>
                  {row3[0].icon && (
                    <div className={`w-16 h-16 ${row3[0].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row3[0].icon} alt={row3[0].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-3">
                <div className={`relative w-20 h-20 ${row3[1].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row3[1].name}>
                  {row3[1].icon && (
                    <div className={`w-16 h-16 ${row3[1].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row3[1].icon} alt={row3[1].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-4">
                <div className={`relative w-20 h-20 ${row3[2].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row3[2].name}>
                  {row3[2].icon && (
                    <div className={`w-16 h-16 ${row3[2].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row3[2].icon} alt={row3[2].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-5">
                <div className={`relative w-20 h-20 ${row3[3].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row3[3].name}>
                  {row3[3].icon && (
                    <div className={`w-16 h-16 ${row3[3].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row3[3].icon} alt={row3[3].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-6">
                <div className={`relative w-20 h-20 ${row3[4].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row3[4].name}>
                  {row3[4].icon && (
                    <div className={`w-16 h-16 ${row3[4].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row3[4].icon} alt={row3[4].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              
              {/* Row 4: 5 icons in columns 1-5 */}
              <div className="col-start-1">
                <div className={`relative w-20 h-20 ${row4[0].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row4[0].name}>
                  {row4[0].icon && (
                    <div className={`w-16 h-16 ${row4[0].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row4[0].icon} alt={row4[0].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-2">
                <div className={`relative w-20 h-20 ${row4[1].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row4[1].name}>
                  {row4[1].icon && (
                    <div className={`w-16 h-16 ${row4[1].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row4[1].icon} alt={row4[1].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-3">
                <div className={`relative w-20 h-20 ${row4[2].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row4[2].name}>
                  {row4[2].icon && (
                    <div className={`w-16 h-16 ${row4[2].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row4[2].icon} alt={row4[2].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-4">
                <div className={`relative w-20 h-20 ${row4[3].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row4[3].name}>
                  {row4[3].icon && (
                    <div className={`w-16 h-16 ${row4[3].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row4[3].icon} alt={row4[3].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-5">
                <div className={`relative w-20 h-20 ${row4[4].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row4[4].name}>
                  {row4[4].icon && (
                    <div className={`w-16 h-16 ${row4[4].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row4[4].icon} alt={row4[4].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
              <div className="col-start-6">
                <div className={`relative w-20 h-20 ${row4[5].color} rounded-2xl shadow-lg hover:scale-105 transition-transform flex items-center justify-center overflow-hidden`} aria-label={row4[5].name}>
                  {row4[5].icon && (
                    <div className={`w-16 h-16 ${row4[5].iconBg} rounded-lg flex items-center justify-center`}>
                      <img src={row4[5].icon} alt={row4[5].name} className="w-14 h-14 object-contain" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      
      {/* Section ends with built-in bottom fade above */}
    </section>
  );
}