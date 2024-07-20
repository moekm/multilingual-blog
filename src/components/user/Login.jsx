import { useReducer } from "react";

function handelInputChange(state, action) {
  let returnedState = [...state];

  switch (action.type) {
    case "username": {
      returnedState[0] = action.event.target.value;
      return returnedState;
    }
    case "password": {
      returnedState[1] = action.event.target.value;
      return returnedState;
    }
    case "reload": {
      return returnedState;
    }
  }
}

export default function Login({ onUpdateUser }) {
  const [inputs, dispatch] = useReducer(handelInputChange, ["admin", "admin"]);

  return (
    <form
      id="login"
      onSubmit={(e) => {
        e.preventDefault();
        const filtered = filterInputs(inputs);
        if (filtered.username.length <= 0) {
          return null;
        }
        onUpdateUser(filtered);
      }}
    >
      <h3>Login</h3>
      <p>
        use any combination of user/pass to login. or admin/admin to edit posts
      </p>
      <div id="inputs">
        <input
          type="text"
          onChange={(event) => dispatch({ type: "username", event })}
          value={inputs[0]}
          placeholder="Username"
        />
        <input
          type="password"
          onChange={(event) => dispatch({ type: "password", event })}
          value={inputs[1]}
          placeholder="Password"
        />
      </div>
      <button>Login</button>
    </form>
  );
}

function filterInputs(inputsArray) {
  let [username, password] = inputsArray;
  username = username.trim().replace(/[^a-zA-Z0-9s]/gm, "");

  const returnBluePrint = { username, permission: 0 };
  if (username.toLowerCase() == "admin" && password.toLowerCase() == "admin") {
    returnBluePrint.permission = 1;
    return returnBluePrint;
  }
  return returnBluePrint;
}
