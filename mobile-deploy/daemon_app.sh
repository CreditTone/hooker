#!/system/bin/sh

PKG="$1"

if [ -z "$PKG" ]; then
    echo "Usage: $0 <package_name>"
    exit 1
fi

while true
do
    if ! pidof $PKG >/dev/null; then
        echo "[$(date)] restart $PKG"

        monkey -p $PKG -c android.intent.category.LAUNCHER 1

        # 等待APP启动
        sleep 15
    else
        echo "[$(date)] $PKG alive"
        sleep 3
    fi
done