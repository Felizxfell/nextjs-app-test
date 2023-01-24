import { useEffect, useState } from "react";
import Link from 'next/link';

import nextConfig from "../next-i18next.config";

const languages = [
  { name: "Español", iso: "es", iso_country: "MX" },
  { name: "English", iso: "en", iso_country: "US" },
];

export default function Lang({ changeLanguage }) {
  const [toggle, setToggle] = useState(false);
  const [langActual, setLangActual] = useState({});
  const [defaultLocale, setdefaultLocale] = useState(
    nextConfig.i18n.defaultLocale
  );

  useEffect(() => {
    const lan = languages.find((l) => l.iso === defaultLocale);
    setLangActual(lan);
  }, [langActual, defaultLocale]);

  const selectLang = (iso) => {
    const lan = languages.find((l) => l.iso === iso);
    setToggle(false);
    setdefaultLocale(iso);
    changeLanguage(iso);
    setLangActual(lan);
  };

  return (
    <>
      <div
        className="px-6 py-3 text-left opensans cursor-pointer"
        onClick={() => setToggle(!toggle)}
      >
        <span className="text-sm text-libellum-text-gray">
          {langActual.iso}_{langActual.iso_country}
        </span>
      </div>
      {toggle && (
        <div className="p-3 text-left transition bg-slate-50">
          <div className="mb-2">
            {languages.map((i) => {
              return (
                <span
                  key={i.iso}
                  alt={i.name}
                  className="opensans text-sm block cursor-pointer"
                  onClick={() => selectLang(i.iso)}
                >
                  {i.iso === langActual.iso && (
                    <Link href="/" locale={i.iso} className="font-bold">{i.name}</Link>
                  )}
                  <Link href="/" locale={i.iso}>{i.name}</Link>
                </span>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
