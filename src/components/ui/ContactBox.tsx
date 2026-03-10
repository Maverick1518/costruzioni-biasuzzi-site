import { company } from "@/data/company";

export default function ContactBox() {
  return (
    <div className="rounded border border-neutral-200 bg-white p-6 text-sm">
      <p className="mb-3 font-semibold text-neutral-900">{company.name}</p>
      <p className="mb-1 text-neutral-600">
        Tel:{" "}
        <a
          href={`tel:${company.contact.phone}`}
          className="font-medium text-neutral-800 hover:underline"
        >
          {company.contact.phone}
        </a>
      </p>
      <p className="text-neutral-600">
        Email:{" "}
        <a
          href={`mailto:${company.contact.email}`}
          className="font-medium text-neutral-800 hover:underline"
        >
          {company.contact.email}
        </a>
      </p>
    </div>
  );
}
