import { jwtDecode, JwtPayload } from 'jwt-decode';

export function parseJwt(token: string): JwtPayload | null {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken;
  } catch (error) {
    console.error('Failed to decode JWT token:', error);
    return null;
  }
}
