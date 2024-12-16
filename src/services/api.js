export const sendFormData = async (formData) => {
  try {
    const response = await fetch(
      `${process.env.REACT_APP_API_URL}/send-email`,
      {
        method: "POST",
        body: formData
      }
    );

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
