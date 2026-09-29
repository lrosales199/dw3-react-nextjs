const User = () => {
  // Variáveis devem vir antes do "return"
  const name = "Leonardo";

  return (
    // Fragment => Abrigar vários elementos HTML
    <>
      <div>
        {/* {} => Expressões JSX */}
        <p>Olá, {name}</p>
      </div>
    </>
  );
};

export default User;