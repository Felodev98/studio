export type Trip = {
  id: string;
  destination: string;
  origin: string;
  departureTime: string;
  arrivalTime: string;
  cost: number;
  vehicle: {
    id: string;
    model: string;
    plateNumber: string;
  };
  stops: string[];
};

export type Vehicle = {
  id: string;
  model: string;
  plateNumber: string;
  capacity: number;
  status: 'Active' | 'Maintenance' | 'Inactive';
};

export type Driver = {
  id: string;
  name: string;
  licenseNumber: string;
  contact: string;
  status: 'Active' | 'On Leave' | 'Inactive';
};

export const mockTrips: Trip[] = [
  {
    id: 'TRP101',
    destination: 'Mombasa',
    origin: 'Nairobi',
    departureTime: '08:00 AM',
    arrivalTime: '04:00 PM',
    cost: 1200,
    vehicle: { id: 'VHC01', model: 'Scania F310', plateNumber: 'KDA 123A' },
    stops: ['Mtito Andei', 'Voi'],
  },
  {
    id: 'TRP102',
    destination: 'Kisumu',
    origin: 'Nairobi',
    departureTime: '09:30 AM',
    arrivalTime: '05:30 PM',
    cost: 1500,
    vehicle: { id: 'VHC02', model: 'Mercedes-Benz Tourismo', plateNumber: 'KDB 456B' },
    stops: ['Nakuru', 'Kericho'],
  },
  {
    id: 'TRP103',
    destination: 'Nakuru',
    origin: 'Nairobi',
    departureTime: '11:00 AM',
    arrivalTime: '02:00 PM',
    cost: 800,
    vehicle: { id: 'VHC03', model: 'Volvo 9700', plateNumber: 'KDC 789C' },
    stops: ['Naivasha'],
  },
    {
    id: 'TRP104',
    destination: 'Eldoret',
    origin: 'Nairobi',
    departureTime: '07:00 AM',
    arrivalTime: '03:00 PM',
    cost: 1400,
    vehicle: { id: 'VHC04', model: 'Scania F310', plateNumber: 'KDD 321D' },
    stops: ['Nakuru', 'Timboroa'],
  },
];

export const mockVehicles: Vehicle[] = [
    { id: 'VHC01', model: 'Scania F310', plateNumber: 'KDA 123A', capacity: 49, status: 'Active' },
    { id: 'VHC02', model: 'Mercedes-Benz Tourismo', plateNumber: 'KDB 456B', capacity: 52, status: 'Active' },
    { id: 'VHC03', model: 'Volvo 9700', plateNumber: 'KDC 789C', capacity: 49, status: 'Maintenance' },
    { id: 'VHC04', model: 'Scania F310', plateNumber: 'KDD 321D', capacity: 49, status: 'Active' },
    { id: 'VHC05', model: 'Isuzu FVR', plateNumber: 'KDE 654E', capacity: 62, status: 'Inactive' },
];

export const mockDrivers: Driver[] = [
    { id: 'DRV01', name: 'James Kamau', licenseNumber: 'DLX98765', contact: '+254712345678', status: 'Active' },
    { id: 'DRV02', name: 'Mary Akinyi', licenseNumber: 'DLY54321', contact: '+254723456789', status: 'Active' },
    { id: 'DRV03', name: 'Peter Omondi', licenseNumber: 'DLZ12345', contact: '+254734567890', status: 'On Leave' },
    { id: 'DRV04', name: 'Fatuma Ali', licenseNumber: 'DLA67890', contact: '+254745678901', status: 'Active' },
    { id: 'DRV05', name: 'David Mwangi', licenseNumber: 'DLB23456', contact: '+254756789012', status: 'Inactive' },
];
