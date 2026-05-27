import { IdentityData, MainInputData, GeneratorOutput } from "../types";

export async function generateSoalAndKisiKisi(
  identity: IdentityData,
  mainInput: MainInputData
): Promise<GeneratorOutput> {
  const response = await fetch('/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identity, mainInput }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.error || 'Terjadi kesalahan saat menghubungi server.');
  }

  return response.json();
}

