interface BigHeaderProps {
  text: string;
}

export function BigHeader({ text }: BigHeaderProps) {
  return <h2>{text}</h2>;
}
