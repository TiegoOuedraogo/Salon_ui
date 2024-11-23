export interface Appointment {
  appointmentId: number;
  date: Date;
  status: 'PENDING' | 'CONFIRMED' | 'CANCELED' | 'COMPLETED';
  userId: number;
  serviceId: number;
  stylistId: number;
  userName?: string;
  serviceName?: string;
  stylistName?: string;
}
