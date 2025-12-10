import { useAuthStore } from '@/store/useAuthStore';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const login = useAuthStore((state) => state.login); // Ambil fungsi login
  const router = useRouter();

  const handleLogin = async () => {
    // ... ceritanya fetch ke API Laravel ...
    const response = await apiLogin(); 

    if (response.success) {
      // SIMPAN DATA KE ZUSTAND
      login(response.user, response.token);
      
      // Pindah ke Home
      router.push('/');
    }
  };
  
  // ... render form login ...
}