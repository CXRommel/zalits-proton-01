import React, { useState, useEffect } from "react";
import MenuComponent from "./components/MenuComponent";
import HeadComponent from "./components/HeadComponent";
import InfoComponent from "./components/InfoComponent";
import menuData from "#src/data/client.json";

function MenuDonajiComponent() {
  const defaultLang = menuData.intl?.defaultLanguage || "es";
  const defaultCurr = menuData.intl?.defaultCurrency || "mxn";
  const [lang, setLang] = useState(defaultLang);
  const [curr, setCurr] = useState(defaultCurr);
  return (
    <div className="w-full mx-auto px-4">
      <HeadComponent
        menuData={menuData}
        lang={lang}
        curr={curr}
        setLang={setLang}
        setCurr={setCurr}
      />
      <InfoComponent menuData={menuData} language={lang} />
      <MenuComponent menuData={menuData} language={lang} currency={curr} />
    </div>
  );
}

export default MenuDonajiComponent;

// function formatPrice(priceObj, curr) {
//   const v = priceObj?.[curr] ?? Object.values(priceObj ?? {})[0] ?? 0;
//   const locale = curr === "usd" ? "en-US" : "es-MX";
//   const currencyCode = curr === "usd" ? "USD" : "MXN";

//   return new Intl.NumberFormat(locale, {
//     style: "currency",
//     currency: currencyCode,
//   }).format(v);
// }

// function MenuDonajiComponent() {
//   const defaultLang = menuData.intl?.defaultLanguage || "es";
//   const defaultCurr = menuData.intl?.defaultCurrency || "mxn";

//   const [lang, setLang] = useState(defaultLang);
//   const [curr, setCurr] = useState(defaultCurr);
//   const [activeSectionIndex, setActiveSectionIndex] = useState(0);
//   const [mounted, setMounted] = useState(false);

//   const theme = menuData.theme || {};
//   const colors = theme.colors || {};
//   const sections = menuData.menus?.[0]?.sections || [];

//   useEffect(() => setMounted(true), []);

//   return (
//     <div className="min-h-screen p-6" style={{ background: colors.background }}>
//       <HeaderMenu
//         menuData={menuData}
//         theme={theme}
//         colors={colors}
//         lang={lang}
//         curr={curr}
//         setLang={setLang}
//         setCurr={setCurr}
//       />

//       <main className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
//         <SidebarMenu
//           sections={sections}
//           lang={lang}
//           theme={theme}
//           activeIndex={activeSectionIndex}
//           setActive={setActiveSectionIndex}
//         />

//         <SectionItems
//           section={sections[activeSectionIndex]}
//           lang={lang}
//           curr={curr}
//           theme={theme}
//           mounted={mounted}
//         />
//       </main>

//       <FooterMenu menuData={menuData} theme={theme} colors={colors} />
//     </div>
//   );
// }

// function SidebarMenu({ sections, lang, theme, activeIndex, setActive }) {
//   return (
//     <aside
//       className="md:col-span-1 bg-white rounded-xl p-4 shadow-sm"
//       style={{
//         border: `1px solid ${theme.components?.navigation?.borderColor}`,
//       }}
//     >
//       <h2
//         className="text-lg font-semibold mb-3"
//         style={{ color: theme.components?.section?.headerTextColor }}
//       >
//         {lang === "es" ? "Secciones" : "Sections"}
//       </h2>

//       <nav className="flex flex-col gap-3">
//         {sections.map((sec, i) => (
//           <button
//             key={i}
//             onClick={() => setActive(i)}
//             className={`gap-3 text-center p-3 rounded-xl transition-all duration-200 ${
//               i === activeIndex ? "shadow-md" : ""
//             }`}
//             style={{
//               background:
//                 i === activeIndex
//                   ? theme.components?.navigation?.activeBackground
//                   : theme.components?.navigation?.inactiveBackground,
//               color:
//                 i === activeIndex
//                   ? theme.components?.navigation?.activeTextColor
//                   : theme.components?.navigation?.inactiveTextColor,
//               border: `1px solid ${theme.components?.navigation?.borderColor}`,
//             }}
//           >
//             <img
//               src={sec.icon}
//               alt={sec.name?.[lang]}
//               className="object-contain"
//             />
//           </button>
//         ))}
//       </nav>
//     </aside>
//   );
// }

// function SectionItems({ section, lang, curr, theme, mounted }) {
//   if (!section) return null;

//   return (
//     <section className="md:col-span-3">
//       <div className="flex items-center justify-between mb-4">
//         <h2
//           className="m-5 text-2xl font-bold"
//           style={{
//             color: theme.colors?.textPrimary,
//             fontFamily: theme.typography?.fontFamily?.sectionTitle,
//           }}
//         >
//           {section.name?.[lang]}
//         </h2>
//         <br />
//         <p> {section.description?.[lang]}</p>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//         {section.items?.map((item) => (
//           <article
//             key={item.id}
//             className={`p-4 rounded-xl border transition-transform duration-200 ease-out transform hover:scale-105 ${
//               mounted ? "opacity-100" : "opacity-0 translate-y-2"
//             }`}
//             style={{
//               background: theme.components?.menuItem?.background,
//               borderColor: theme.components?.menuItem?.borderColor,
//               borderRadius: theme.borderRadius?.md,
//             }}
//           >
//             <div className="flex items-start gap-3">
//               <div className="flex-1">
//                 <h3
//                   className="text-lg font-semibold mb-1"
//                   style={{ color: theme.components?.menuItem?.titleColor }}
//                 >
//                   {item.name?.[lang]}
//                 </h3>
//                 {item.description && (
//                   <p
//                     className="text-sm mb-2"
//                     style={{
//                       color: theme.components?.menuItem?.descriptionColor,
//                     }}
//                   >
//                     {item.description?.[lang]}
//                   </p>
//                 )}
//                 <div className="mt-3 flex items-center justify-between">
//                   <div
//                     className="font-semibold"
//                     style={{
//                       color: theme.components?.menuItem?.priceColor,
//                     }}
//                   >
//                     {formatPrice(item.price, curr)}
//                   </div>
//                   <button
//                     className="px-3 py-1 rounded-full font-medium shadow-sm transition-colors duration-150"
//                     style={{
//                       background: theme.components?.button?.primaryBackground,
//                       color: theme.components?.button?.primaryText,
//                     }}
//                     onClick={() =>
//                       alert(
//                         `${item.name?.[lang]} — ${formatPrice(
//                           item.price,
//                           curr
//                         )}`
//                       )
//                     }
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </article>
//         ))}
//       </div>
//     </section>
//   );
// }

// function HeaderMenu({ menuData, theme, colors, lang, curr, setLang, setCurr }) {
//   return (
//     <header
//       className="max-w-5xl mx-auto rounded-xl p-6 mb-6 shadow-sm flex items-center gap-4"
//       style={{
//         background: theme.components?.header?.background,
//         border: `1px solid ${theme.components?.header?.borderColor}`,
//       }}
//     >
//       <img
//         src={menuData.profile?.logo?.url}
//         alt={menuData.name}
//         className="w-20 h-20 rounded-full object-cover"
//       />

//       <div className="flex-1">
//         <h1
//           className="text-2xl font-extrabold"
//           style={{
//             color: colors.textPrimary,
//             fontFamily: theme.typography?.fontFamily?.display,
//           }}
//         >
//           {menuData.name}
//         </h1>
//         <p
//           className="text-sm mt-1"
//           style={{
//             color: colors.textSecondary,
//           }}
//         >
//           {menuData.profile?.slogan?.[lang]}
//         </p>
//         <div className="mt-3 flex gap-3 items-center">
//           <div
//             className="rounded-full px-3 py-1 text-sm font-medium"
//             style={{
//               background: theme.components?.bottomNav?.background,
//               border: `1px solid ${theme.components?.bottomNav?.borderColor}`,
//               color: theme.components?.bottomNav?.inactiveTextColor,
//             }}
//           >
//             {menuData.address?.city}, {menuData.address?.state}
//           </div>

//           <div className="ml-auto flex gap-2">
//             <select
//               value={lang}
//               onChange={(e) => setLang(e.target.value)}
//               className="rounded-md px-2 py-1 border"
//             >
//               {menuData.intl?.languages?.map((l) => (
//                 <option key={l} value={l}>
//                   {l.toUpperCase()}
//                 </option>
//               ))}
//             </select>

//             <select
//               value={curr}
//               onChange={(e) => setCurr(e.target.value)}
//               className="rounded-md px-2 py-1 border"
//             >
//               {menuData.intl?.currencies?.map((c) => (
//                 <option key={c} value={c}>
//                   {c.toUpperCase()}
//                 </option>
//               ))}
//             </select>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// function FooterMenu({ menuData, theme, colors }) {
//   return (
//     <footer
//       className="max-w-5xl mx-auto mt-8 p-4 rounded-xl flex items-center justify-between"
//       style={{
//         background: theme.components?.bottomNav?.background,
//         border: `1px solid ${theme.components?.bottomNav?.borderColor}`,
//       }}
//     >
//       <div
//         className="text-sm"
//         style={{ color: theme.components?.bottomNav?.inactiveTextColor }}
//       >
//         {menuData.contact?.phone} • {menuData.contact?.email}
//       </div>
//       <div
//         className="text-sm font-medium"
//         style={{ color: colors.textSecondary }}
//       >
//         {menuData.schedule?.map((s) => s.open).join(" • ")}
//       </div>
//     </footer>
//   );
// }

// export default MenuDonajiComponent;
