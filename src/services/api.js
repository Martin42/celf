export const sendFormData = async (formData) => {
  try {
    const response = await fetch("http://localhost:3001/send-email", {
      method: "POST",
      body: formData
    });

    if (response.ok) {
      return { success: true };
    } else {
      return { success: false, error: "Failed to send email." };
    }
  } catch (error) {
    console.error("Error:", error);
    return {
      success: false,
      error: "An error occurred while sending the email."
    };
  }
};
