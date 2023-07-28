export function testingExampleOne(a: number, b: number) {
  return a + b;
}

export const testingExampleTwo = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
  return response.json();
};

