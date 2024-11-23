export interface SalonService {
  serviceId: number;
  serviceName: string;
  servicePrice: number;
  durationInMinutes: number;
  serviceDescription?: string;
}
