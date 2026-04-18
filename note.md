sebelum mengerjakan fitur pastikan lakukan
```bash
    npx prisma migration dev
```

Pastikan DB sudah Sync sebelum melakukan perubahan agar tidak bentrok
```bash
    npx prisma migration status
```
jika sudah up-to-date bisa lakukan perubahan schema