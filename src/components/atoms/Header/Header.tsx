interface BigHeaderProps {
  text: string;
}

export function BigHeader({ text }: BigHeaderProps) {
  return <h1>{text}</h1>;
}
