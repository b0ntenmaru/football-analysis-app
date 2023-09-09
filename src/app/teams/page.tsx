import {fetchFromSportmonks} from "@/app/utils/fetchFromSportmonks";

export default async function Home() {
    const data = await fetchFromSportmonks({query: 'fixtures'})

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    )
}
