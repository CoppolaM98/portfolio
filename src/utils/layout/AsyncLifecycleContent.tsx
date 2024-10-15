import { Button, Image, Spinner, Text } from "@chakra-ui/react"
import ErrorIcon from "assets/icons/error.svg"
import { AsyncStatus, useAsyncLifecycle } from "utils/hooks/useAsyncLifecycle"
import { FullPageContent } from "./FullPageContent"

export const LoadingContent = () => {
    return <FullPageContent>
        <Spinner />
        <Text>Fetching data...</Text>
    </FullPageContent>
}

export const ErrorContent = () => {
    return <FullPageContent>
        <Image src={ErrorIcon} />
        <Text>Error fetching data</Text>
    </FullPageContent>
}

export const NotStartedContent = () => {
    return <FullPageContent>
        <Text>Data fetch not started</Text>
        <Button onClick={() => {

        }}>FETCH</Button>
    </FullPageContent>
}

export const NoDataContent = () => {
    return <FullPageContent>
        <Text>OOOOOOPS....</Text>
        <Text>No data was found</Text>
    </FullPageContent>
}

export const AsyncLifecycleDependantContent = <S extends object>({ promiseGenerator, children, disableAutostart, disableRefresh }: { promiseGenerator: () => Promise<S>, children: (value: S) => JSX.Element, disableAutostart?: boolean, disableRefresh?: boolean }) => {

    const [projects, status, refresh] = useAsyncLifecycle(promiseGenerator, disableAutostart)

    switch (status) {
        case AsyncStatus.STARTED:
            return <LoadingContent />
        case AsyncStatus.ERROR:
            return <ErrorContent />
        case AsyncStatus.SUCCESS:
            return children(projects!);
        case AsyncStatus.NOT_STARTED:
            return <>"plz start c:" TODO</>
        default:
            return <>"UNHANDLED STATUS" TODO</>
    }
}