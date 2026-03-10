export interface CareerFormValues {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  message: string;
}

export type CareerFormErrors = Partial<Record<keyof CareerFormValues | "cv", string>>;

export interface CareerApiResponse {
  ok: boolean;
  message: string;
}
