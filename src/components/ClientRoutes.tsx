/* LVMR Atelier Parisien client route registry: keep browser-only navigation, storage, and metadata effects on the client. */
"use client";
import dynamic from "next/dynamic";

const inner = () => import("@/site-pages/InnerPages");
export const Home = dynamic(() => import("@/site-pages/Home"), { ssr: false });
export const PremiumPage = dynamic(() => inner().then((module) => module.PremiumPage), { ssr: false });
export const EnvironnementPage = dynamic(() => inner().then((module) => module.EnvironnementPage), { ssr: false });
export const ExpertisesPage = dynamic(() => inner().then((module) => module.ExpertisesPage), { ssr: false });
export const RealisationsPage = dynamic(() => inner().then((module) => module.RealisationsPage), { ssr: false });
export const GroupePage = dynamic(() => inner().then((module) => module.GroupePage), { ssr: false });
export const DevisPage = dynamic(() => inner().then((module) => module.DevisPage), { ssr: false });
export const ContactPage = dynamic(() => inner().then((module) => module.ContactPage), { ssr: false });
export const LegalPage = dynamic(() => inner().then((module) => module.LegalPage), { ssr: false });
export const NotFoundPage = dynamic(() => inner().then((module) => module.NotFoundPage), { ssr: false });
export const ServiceDetailPage = dynamic(() => inner().then((module) => module.ServiceDetailPage), { ssr: false });
