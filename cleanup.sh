#!/bin/bash

# Portfolio Cleanup Script
# Removes all Supabase and club-specific files

echo "🧹 Starting portfolio cleanup..."

# Remove Supabase API routes and club-specific pages
echo "📁 Removing old routes..."
rm -rf app/api
rm -rf app/leads
rm -rf app/members
rm -rf app/leaderboard
rm -rf app/events
rm -rf app/gallery
rm -rf app/technovit
rm -rf app/adversary
rm -rf app/enquiry

# Remove Supabase utility
echo "🗑️  Removing Supabase client..."
rm -f utils/supabaseClient.ts

# Remove club-specific seed data
echo "🗑️  Removing club seed files..."
rm -f seeds/adversary.tsx
rm -f seeds/core.tsx
rm -f seeds/facultyCoordinator.tsx
rm -f seeds/leads.tsx

# Remove old constants (we have new data/portfolio.ts now)
echo "🗑️  Cleaning up old constants..."
# Keep constants/index.ts for now as it might be used elsewhere

echo "✅ Cleanup complete!"
echo ""
echo "📦 Next steps:"
echo "1. Run: npm uninstall @supabase/supabase-js"
echo "2. Update data/portfolio.ts with your real information"
echo "3. Replace placeholder images in public/assets/images/"
echo "4. Test the site: npm run dev"
echo ""
echo "🎉 Your portfolio is now Supabase-free and club-content-free!"
