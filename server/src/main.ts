import {NestFactory} from "@nestjs/core";

async function startServer() {
    try {
        const app = await NestFactory.create(AppModule)
        app.enableCors()

        await app.listen(3000)
    } catch (e) {
        console.log(`Error: ${e}`)
    }
}

startServer()