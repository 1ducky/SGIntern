
export default function ServerLog(message: string, event: string) {
    console.log(`[ServerLog] [${event}]: ${message}`);
}