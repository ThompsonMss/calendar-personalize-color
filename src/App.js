import React from 'react';
import Calendar from './Calendar';

function App() {

  const [dayCheck, setDayCheck] = React.useState("");

  React.useEffect(() => {
    console.log('dayCheck', dayCheck)
  }, [dayCheck]);

  return (
    <div>
      <Calendar
        onCheckDay={setDayCheck}
        alertBlock={() => alert('Essa data está bloqueada.')}
        primaryColor="#000"
        inversePrimaryColor="#FFF"
        secondaryColor="#f39c12"
        inverseSecondaryColor="#000"
      // dates={{"2021-07-06": true, "2021-07-07": false}}
      />
    </div>
  );
}

export default App;
