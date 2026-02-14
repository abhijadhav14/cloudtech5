# Zoho Mail Setup Guide for cloudtechnologysolutions.in

## Step 1: Sign Up for Zoho Mail

1. Go to https://www.zoho.com/mail/
2. Click **"Sign Up Now"** or **"Get Started"**
3. Choose **Zoho Mail Free Plan** (supports up to 5 users with 5GB per user)
   - Or choose a paid plan if you need more users/storage

## Step 2: Add Your Domain

1. After signing up, you'll be asked to add your domain
2. Enter: `cloudtechnologysolutions.in`
3. Choose the option: **"I already have a domain"**
4. Click **"Add Domain"**

## Step 3: Verify Domain Ownership

Zoho will ask you to verify domain ownership using one of these methods:

### Option A: TXT Record (Recommended)
1. Zoho will provide a TXT record like:
   ```
   Type: TXT
   Host: @ or cloudtechnologysolutions.in
   Value: zoho-verification=zb12345678.zmverify.zoho.com
   TTL: 3600
   ```

2. **Add this to your domain DNS settings:**
   - Go to your domain registrar (GoDaddy, Namecheap, etc.)
   - Find DNS Management section
   - Add the TXT record provided by Zoho
   - Save changes
   - Wait 5-30 minutes for propagation

3. Go back to Zoho and click **"Verify"**

### Option B: CNAME Record
If TXT doesn't work, use CNAME method (Zoho will provide instructions)

## Step 4: Configure MX Records

**CRITICAL: This makes your email work!**

Go to your domain DNS settings and add these MX records:

```
Priority  Host                    Points To                 TTL
10        @ or domain root        mx.zoho.com               3600
20        @ or domain root        mx2.zoho.com              3600
50        @ or domain root        mx3.zoho.com              3600
```

**Important Notes:**
- Remove or disable any existing MX records
- Priority 10 is highest (used first)
- Wait 24-48 hours for full propagation (but often works in 1-2 hours)

## Step 5: Add SPF Record (Email Authentication)

Add this TXT record to prevent emails going to spam:

```
Type: TXT
Host: @ or cloudtechnologysolutions.in
Value: v=spf1 include:zoho.com ~all
TTL: 3600
```

## Step 6: Add DKIM Record (Email Security)

1. In Zoho Mail Admin Console, go to **Email Configuration → DKIM**
2. Click **"Add Selector"** 
3. Zoho will generate a DKIM record like:

```
Type: TXT
Host: zoho._domainkey.cloudtechnologysolutions.in
Value: v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GN... (long string)
TTL: 3600
```

4. Add this TXT record to your DNS
5. Verify in Zoho after DNS propagation

## Step 7: Add DMARC Record (Optional but Recommended)

```
Type: TXT
Host: _dmarc.cloudtechnologysolutions.in
Value: v=DMARC1; p=none; rua=mailto:info@cloudtechnologysolutions.in
TTL: 3600
```

## Step 8: Create Email Accounts

1. In Zoho Mail Admin Console, go to **Users**
2. Click **"Add User"**
3. Create these accounts:
   - info@cloudtechnologysolutions.in (General inquiries)
   - support@cloudtechnologysolutions.in (Support)
   - admin@cloudtechnologysolutions.in (Admin)
   - noreply@cloudtechnologysolutions.in (System emails)

## Step 9: DNS Configuration Summary

Here's what you need to add to your domain DNS (at your registrar):

### MX Records (Mail Exchange)
```
Type    Host    Priority    Value               TTL
MX      @       10          mx.zoho.com         3600
MX      @       20          mx2.zoho.com        3600
MX      @       50          mx3.zoho.com        3600
```

### TXT Records (Verification & Security)
```
Type    Host                                    Value                                           TTL
TXT     @                                       zoho-verification=zb12345678.zmverify.zoho.com  3600
TXT     @                                       v=spf1 include:zoho.com ~all                    3600
TXT     zoho._domainkey                         v=DKIM1; k=rsa; p=MIG... (from Zoho)            3600
TXT     _dmarc                                  v=DMARC1; p=none; rua=mailto:info@...           3600
```

## Step 10: Test Your Email

After DNS propagation (wait 2-4 hours):

1. Log in to Zoho Mail: https://mail.zoho.com
2. Send a test email from info@cloudtechnologysolutions.in to your personal email
3. Reply to that email
4. Send an email FROM your personal email TO info@cloudtechnologysolutions.in
5. Check if it arrives

## Step 11: Set Up Email Forwarding (Optional)

If you want emails to info@cloudtechnologysolutions.in to also go to your personal email:

1. Go to **Settings → Mail Accounts → Email Forwarding**
2. Add your personal email
3. Verify the forwarding address
4. Enable forwarding

## Common DNS Providers - Where to Add Records

### GoDaddy
1. Login → My Products → DNS
2. Click "Add" for each record type

### Namecheap  
1. Login → Domain List → Manage → Advanced DNS
2. Add records in "Host Records" section

### Cloudflare
1. Login → Select Domain → DNS
2. Add records (make sure MX records are DNS-only, not proxied)

### Google Domains
1. Login → My Domains → DNS
2. Scroll to "Custom resource records"

## Verification Checklist

- [ ] Domain added to Zoho Mail
- [ ] Domain ownership verified (TXT record)
- [ ] MX records added (mx.zoho.com, mx2.zoho.com, mx3.zoho.com)
- [ ] SPF record added (v=spf1 include:zoho.com ~all)
- [ ] DKIM record added and verified
- [ ] DMARC record added (optional)
- [ ] Email account created (info@cloudtechnologysolutions.in)
- [ ] Test email sent and received successfully

## Useful Tools to Check DNS Propagation

- **MX Records:** https://mxtoolbox.com/
- **DNS Propagation:** https://dnschecker.org/
- **Email Test:** https://www.mail-tester.com/

## Troubleshooting

### Email not receiving
- Check MX records are correct
- Wait 24-48 hours for DNS propagation
- Verify domain in Zoho is active
- Check spam folder

### Email going to spam
- Add SPF record
- Configure DKIM
- Add DMARC record
- Send from verified domain

### Can't verify domain
- Check TXT record is added correctly
- Wait 30 minutes for DNS propagation
- Try CNAME verification method instead

## Cost

**Zoho Mail Free Plan:**
- Up to 5 users
- 5GB per user
- Single domain
- Basic features

**Zoho Mail Standard Plan ($1/user/month):**
- 30GB per user
- Custom domain
- Advanced features

## Next Steps After Setup

1. Update website to use the verified email
2. Set up email signature in Zoho
3. Configure mobile app (iOS/Android)
4. Set up auto-responders if needed
5. Create email aliases

## Support

- Zoho Mail Help: https://www.zoho.com/mail/help/
- Zoho Support: support@zohocorp.com
- Community: https://help.zoho.com/portal/community

---

**Timeline:**
- Setup: 15-30 minutes
- DNS Propagation: 2-24 hours
- Full functionality: 24-48 hours

**Priority:** High - Official corporate email is essential for business credibility!
