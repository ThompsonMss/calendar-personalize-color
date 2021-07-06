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
      />
    </div>
  );
}

export default App;
