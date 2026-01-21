#!/bin/bash

# Kill any existing processes
pkill -9 node 2>/dev/null
pkill -9 npm 2>/dev/null
sleep 2

# Start backend
echo "🚀 Starting Backend Server..."
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main/server
npm run dev &
BACKEND_PID=$!

echo "Backend PID: $BACKEND_PID"
sleep 3

# Start frontend in new tab/window (note: you should run this in a separate terminal)
echo ""
echo "🚀 Starting Frontend Server..."
cd /Users/abhishekjadhav/dev/NODE\ JS/cloud-tech-academy-main
npm run dev &
FRONTEND_PID=$!

echo "Frontend PID: $FRONTEND_PID"
sleep 3

echo ""
echo "✅ Both servers started!"
echo ""
echo "Backend:  http://localhost:3001/api/health"
echo "Frontend: http://localhost:5173/"
echo ""
echo "To stop, press Ctrl+C in both terminals"

wait
