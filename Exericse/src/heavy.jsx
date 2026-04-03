function HeavyPage() {
  const items = [];

  for (let i = 0; i < 100000; i++) {
    items.push(<p key={i}>Item {i}</p>);
  }

  return <div>{items}</div>;
}

export default HeavyPage;