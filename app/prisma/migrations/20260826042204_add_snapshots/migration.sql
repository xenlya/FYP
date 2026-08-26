-- CreateTable
CREATE TABLE "Snapshot" (
    "id" SERIAL NOT NULL,
    "databaseInstanceId" INTEGER NOT NULL,
    "version" INTEGER NOT NULL,
    "message" TEXT,
    "createdBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Snapshot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SnapshotContent" (
    "id" SERIAL NOT NULL,
    "snapshotId" INTEGER NOT NULL,
    "schemaJson" JSONB NOT NULL,

    CONSTRAINT "SnapshotContent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Snapshot_databaseInstanceId_version_key" ON "Snapshot"("databaseInstanceId", "version");

-- CreateIndex
CREATE UNIQUE INDEX "SnapshotContent_snapshotId_key" ON "SnapshotContent"("snapshotId");

-- AddForeignKey
ALTER TABLE "Snapshot" ADD CONSTRAINT "Snapshot_databaseInstanceId_fkey" FOREIGN KEY ("databaseInstanceId") REFERENCES "DatabaseInstance"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SnapshotContent" ADD CONSTRAINT "SnapshotContent_snapshotId_fkey" FOREIGN KEY ("snapshotId") REFERENCES "Snapshot"("id") ON DELETE CASCADE ON UPDATE CASCADE;
