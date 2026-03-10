import { company } from "@/data/company";

export default function ContactBox() {
  return (
    <div className="rounded border border-slate-200 bg-white p-6 text-sm">
      <p className="mb-3 font-semibold text-slate-900">{company.name}</p>
      <p className="mb-1 text-slate-600">
        Tel:{" "}
        <a
          href={`tel:${company.contact.phone}`}
          className="font-medium text-slate-800 hover:underline"
        >
          {company.contact.phone}
        </a>
      </p>
      <p className="text-slate-600">
        Email:{" "}
        <a
          href={`mailto:${company.contact.email}`}
          className="font-medium text-slate-800 hover:underline"
        >
          {company.contact.email}
        </a>
      </p>
    </div>
  );
}
