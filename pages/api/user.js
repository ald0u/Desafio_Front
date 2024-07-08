export async function NewUser(formData) {
  const response = await fetch('http://localhost:8080/users', {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Error en el registro");
  }

  return response.json();
}

export async function LoginUser(userData) {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Error en el login");
  }

  const data = await response.json();
  console.log(data);
  return data;
}

export async function CreateNewPost(userData) {
  const token = localStorage.getItem("token")
  const response = await fetch(`${API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    throw new Error("Error en la creación del post");
  }

  const data = await response.json();
  console.log(data);
  return data
}
