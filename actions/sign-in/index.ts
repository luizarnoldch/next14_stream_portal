"use server";

export async function formAction(formData: FormData) {
  
  const rawFormData = {
    user: formData.get("user"),
    password: formData.get("password"),
    token: formData.get("token"),
  };

  console.log(rawFormData);
}
