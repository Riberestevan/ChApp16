function cx() {

    document.getElementById("cx").innerHTML="COPIADO"
}

async function copyToClipboard(textToCopy) {
  // Navigator clipboard api needs a secure context (https)
  if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(textToCopy);
  } else {
      // Use the 'out of viewport hidden text area' trick
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
          
      // Move textarea out of the viewport so it's not visible
      textArea.style.position = "absolute";
      textArea.style.left = "-999999px";
          
      document.body.prepend(textArea);
      textArea.select();

      try {
          document.execCommand('copy');
      } catch (error) {
          console.error(error);
      } finally {
          textArea.remove();
      }
  }
}

const copyToClipboard = str => {
    if (navigator && navigator.clipboard && navigator.clipboard.writeText)
      return navigator.clipboard.writeText(str);
    return Promise.reject('The Clipboard API is not available.');
  };

  const input = document.querySelector("input");
  const btn = document.querySelector("button");

  btn.addEventListener("click", () => {navigator.clipboard.writeText(input.value);})

  // const copyToClipboard = str => {   if (navigator && navigator.clipboard && navigator.clipboard.writeText)     return navigator.clipboard.writeText(str);   return Promise.reject('The Clipboard API is not available.'); };