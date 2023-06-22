const CustomLoginForm: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
  
      try {
        await Auth.signIn(email, password);
        // User is successfully logged in
      } catch (error) {
        console.log('Login error', error);
        // Handle login error
      }
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log in</button>
      </form>
    );
  };
  
  export default CustomLoginForm;