import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="rounded border border-slate-200 bg-white p-6">
      <h3 className="mb-2 text-base font-semibold text-slate-900">{service.title}</h3>
      <p className="text-sm leading-relaxed text-slate-600">{service.description}</p>
    </div>
  );
}
