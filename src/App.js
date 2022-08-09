import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
   <>
   <form>
  
  <div class="form-group">
   <p> <label for="exampleInputEmail1">Email address</label></p>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <p><small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small></p>
  </div>
  <div class="form-group">
   <p> <label for="exampleInputPassword1">Password</label></p>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <p> <label class="form-check-label" for="exampleCheck1">Check me out</label></p>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
   </>
   
  );
}

export default App;
