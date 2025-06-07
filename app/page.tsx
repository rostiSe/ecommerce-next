import LoadingButton from "@/components/custom/loading-button";
import RedirectButton from "@/components/custom/redirect-button";

export default function Home() {
  return (
    <div>
      <LoadingButton loading={false} text="Submit" />
      <RedirectButton redirectUrl="/products" text="Zum kompletten Angebot" />
    </div>
  );
}
