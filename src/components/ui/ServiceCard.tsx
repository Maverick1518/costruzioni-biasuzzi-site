import type { Service } from "@/types/service";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <div className="rounded border border-neutral-200 bg-white p-6 border-t-2 border-t-brand">
      <h3 className="mb-2 text-base font-semibold text-neutral-900">{service.title}</h3>
      <p className="text-sm leading-relaxed text-neutral-600">{service.description}</p>
    </div>
  );
}
