const apiUrl = process.env.NEXT_PUBLIC_CORE_URL;

export const getRecentTrades = async (pairId: string) => {
  if (!apiUrl) {
    throw new Error("API URL is not defined in the environment variables");
  }

  const endpoint = `${apiUrl}/api/v1/recent_trades/?pair=${pairId}&limit=50&offset=0`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch recent trades: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching recent trades:", error);
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to login');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('An error occurred during login');
  }
};

