export default function MyApp() {

     const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    height: '100vh',
    width: '100%'
  };

  return (
    <div style={containerStyle}>
      <h1>Welcome to my app</h1>
    </div>
  );
}