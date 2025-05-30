type CalorieTrackerProps = {
  calories: number;
  text: string;
};
export default function CalorieDisplay({
  calories,
  text,
}: CalorieTrackerProps) {
  return (
    <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
      <span
        className={`font-black text-6xl ${
          text === "Consumidas"
            ? "text-lime-500"
            : text === "Quemadas"
            ? "text-orange-500"
            : text === "Diferencia" && calories < 0
            ? "text-red-500"
            : "text-green-500"
        }`}
      >
        {calories}
      </span>
      {text}
    </p>
  );
}
