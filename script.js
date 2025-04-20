const imgPromise = document.querySelector('#img-promise');
const imgAsync = document.querySelector('#img-async');
const explanationP = document.querySelector('#explanation');

// --- Original Promise-based Fetch (Now for Foxes) --- 
function fetchDataPromise() {
  fetch('https://randomfox.ca/floof/') // New API endpoint
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Fox API returns image URL in 'image' property
      if (!data.image) { 
        throw new Error('API did not return a valid image URL (Promise).');
      }
      imgPromise.src = data.image; 
      imgPromise.alt = "Random fox image (Promise)";
    })
    .catch(error => {
      console.error('Error fetching image (Promise):', error);
      imgPromise.alt = "Could not load image (Promise)";
    });
}

// --- Async/Await Fetch (Now for Foxes) --- 
async function fetchDataAsync() {
  try {
    const response = await fetch('https://randomfox.ca/floof/'); // New API endpoint
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json(); 
    
    // Fox API returns image URL in 'image' property
    if (!data.image) {
      throw new Error('API did not return a valid image URL (Async/Await).');
    }

    imgAsync.src = data.image;
    imgAsync.alt = "Random fox image (Async/Await)";

  } catch (error) {
    console.error('Error fetching image (Async/Await):', error);
    imgAsync.alt = "Could not load image (Async/Await)";
  }
}

// --- Explanation (Improved Readability) --- 
explanationP.innerHTML = `
  <table style="width:100%; max-width:700px; border-collapse:collapse; margin:auto;">
    <thead>
      <tr style="background:#f7f7f7;">
        <th style="padding:8px; border:1px solid #ccc;">Aspect</th>
        <th style="padding:8px; border:1px solid #ccc;">Promises<br><code>.then()/.catch()</code></th>
        <th style="padding:8px; border:1px solid #ccc;">Async/Await<br><code>async/await</code></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:8px; border:1px solid #ccc;"><strong>Readability</strong></td>
        <td style="padding:8px; border:1px solid #ccc;">Can become nested and harder to read with complex chains.</td>
        <td style="padding:8px; border:1px solid #ccc;">Looks more like synchronous code, easier to read and maintain.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #ccc;"><strong>Error Handling</strong></td>
        <td style="padding:8px; border:1px solid #ccc;">Handled with <code>.catch()</code> after the chain.</td>
        <td style="padding:8px; border:1px solid #ccc;">Handled with <code>try...catch</code> blocks, similar to synchronous code.</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #ccc;"><strong>Underlying Mechanism</strong></td>
        <td style="padding:8px; border:1px solid #ccc;">Directly uses Promises.</td>
        <td style="padding:8px; border:1px solid #ccc;">Built on top of Promises (syntactic sugar).</td>
      </tr>
      <tr>
        <td style="padding:8px; border:1px solid #ccc;"><strong>Example</strong></td>
        <td style="padding:8px; border:1px solid #ccc;"><code>fetch(...).then(...).catch(...)</code></td>
        <td style="padding:8px; border:1px solid #ccc;"><code>await fetch(...)</code> inside an <code>async</code> function</td>
      </tr>
    </tbody>
  </table>
`;

// --- Load Images --- 
fetchDataPromise();
fetchDataAsync(); 