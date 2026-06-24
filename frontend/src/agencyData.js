// Mock database mapping high-quality Unsplash image assets for fidelity
export const carAssets = {
  'Tesla Model 3': {
    type: 'Electric Sedan',
    price: 89,
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=150&auto=format&fit=crop&q=60'
  },
  'BMW X5': {
    type: 'Luxury SUV',
    price: 129,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=150&auto=format&fit=crop&q=60'
  },
  'Porsche 911': {
    type: 'Sports Car',
    price: 299,
    image: 'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=150&auto=format&fit=crop&q=60'
  },
  'Mercedes S-Class': {
    type: 'Luxury Sedan',
    price: 199,
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=150&auto=format&fit=crop&q=60'
  },
  'Audi A4': {
    type: 'Premium Sedan',
    price: 79,
    image: 'https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?w=150&auto=format&fit=crop&q=60'
  },
  'Range Rover Sport': {
    type: 'Luxury SUV',
    price: 159,
    image: 'https://images.unsplash.com/photo-1609521263047-f8f205293f24?w=150&auto=format&fit=crop&q=60'
  }
}

export const defaultReservations = [
  {
    id: 'BK-2024-1247',
    customerName: 'Sarah Johnson',
    customerEmail: 'sarah.j@email.com',
    customerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    carName: 'Tesla Model 3',
    carType: 'Electric Sedan',
    dateFrom: '2024-01-15',
    dateTo: '2024-01-20',
    totalPrice: 445,
    status: 'Active'
  },
  {
    id: 'BK-2024-1246',
    customerName: 'Mike Davis',
    customerEmail: 'mike.d@email.com',
    customerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    carName: 'BMW X5',
    carType: 'Luxury SUV',
    dateFrom: '2024-01-18',
    dateTo: '2024-01-25',
    totalPrice: 903,
    status: 'Confirmed'
  },
  {
    id: 'BK-2024-1245',
    customerName: 'Emma Wilson',
    customerEmail: 'emma.w@email.com',
    customerAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
    carName: 'Porsche 911',
    carType: 'Sports Car',
    dateFrom: '2024-01-22',
    dateTo: '2024-01-24',
    totalPrice: 598,
    status: 'Pending'
  },
  {
    id: 'BK-2024-1244',
    customerName: 'James Brown',
    customerEmail: 'james.b@email.com',
    customerAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    carName: 'Mercedes S-Class',
    carType: 'Luxury Sedan',
    dateFrom: '2024-01-10',
    dateTo: '2024-01-14',
    totalPrice: 796,
    status: 'Completed'
  },
  {
    id: 'BK-2024-1243',
    customerName: 'Lisa Anderson',
    customerEmail: 'lisa.a@email.com',
    customerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    carName: 'Audi A4',
    carType: 'Premium Sedan',
    dateFrom: '2024-01-12',
    dateTo: '2024-01-19',
    totalPrice: 553,
    status: 'Cancelled'
  },
  {
    id: 'BK-2024-1242',
    customerName: 'David Martinez',
    customerEmail: 'david.m@email.com',
    customerAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    carName: 'Range Rover Sport',
    carType: 'Luxury SUV',
    dateFrom: '2024-01-16',
    dateTo: '2024-01-23',
    totalPrice: 1113,
    status: 'Active'
  }
]
